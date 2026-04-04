"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

// Custom Hook for Scroll Reveal
function useReveal() {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
}

export default function Companies() {
    const bworthSect = useReveal();
    const vegaSect = useReveal();
    const rymSect = useReveal();
    const syncSect = useReveal();


    useEffect(() => {
        const dot = document.querySelector(".cursor-dot");
        const outline = document.querySelector(".cursor-outline");
        const moveCursor = (e) => {
            if (dot && outline) {
                dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
                outline.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
            }
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <div className="bg-dark text-glacier min-h-screen selection:bg-gold selection:text-dark overflow-x-hidden">
            <div className="grain-overlay" />
            <div className="cursor-dot hidden md:block" />
            <div className="cursor-outline hidden md:block" />

            <Navbar />

            <main className="animate-page-in">
                {/* Portfolio Hero */}
                <section className="min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center px-6 md:px-24 pt-32 relative overflow-hidden">
                    <div className="max-w-7xl relative z-10">
                        <span className="font-industrial text-[10px] md:text-xs tracking-[0.5em] text-gold mb-6 block uppercase">National Strategic Assets</span>
                        <h1 className="font-headline italic text-[11vw] sm:text-6xl md:text-9xl leading-[0.9] mb-8 md:mb-12">
                            The <span className="text-gold-premium italic">Sovereign</span> <br /> Custody.
                        </h1>
                        <div className="gold-rule w-1/4 mb-12 !justify-start" />
                        <p className="font-body text-lg md:text-xl text-glacier/60 max-w-xl leading-relaxed italic">
                            A collection of four market-leading empires, purpose-built to engineer the industrial destiny of a sovereign nation.
                        </p>
                    </div>
                    {/* Background Graphic */}
                    <div className="absolute top-1/2 right-[-10vw] w-[80vw] md:w-[60vw] h-[80vw] md:h-[60vw] border-[0.5px] border-gold/10 rounded-full -translate-y-1/2 pointer-events-none" />
                </section>

                {/* 1. BWORTH - Finance & Luxury RE */}
                <section ref={bworthSect.ref} className="py-24 md:py-48 px-6 md:px-24 relative overflow-hidden">
                    <div className={`flex flex-col lg:flex-row gap-12 md:gap-24 items-center transition-all duration-1000 ${bworthSect.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                        <div className="w-full lg:w-3/5 relative">
                            <div className="aspect-[16/10] bg-white/5 rounded-sm overflow-hidden relative editorial-shadow group">
                                <Link href="https://bworth.co.in/" target="_blank">
                                    <Image 
                                        src="/BWORTH.jpg" 
                                        fill 
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                        className="object-contain p-8 md:p-12 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                                        alt="BWorth Luxury Apparel" 
                                    />
                                    <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/0 transition-colors" />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/5">
                            <span className="font-industrial text-gold tracking-widest text-base md:text-lg mb-4 block uppercase">01 · BWORTH</span>
                            <h2 className="font-headline italic text-5xl md:text-7xl mb-8 leading-tight">The Modern <br /> Apparel.</h2>
                            
                            <div className="flex items-center gap-6 mb-8">
                                 <Link href="https://bworth.co.in/" target="_blank" className="flex items-center gap-6 hover:opacity-80 transition-opacity">
                                     <div className="w-12 h-12 rounded-full border border-gold/40 p-1">
                                         <div className="w-full h-full rounded-full bg-gold/10 overflow-hidden relative grayscale">
                                             <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center text-gold/40 text-sm">person</span>
                                         </div>
                                     </div>
                                     <div className="font-industrial text-[10px] tracking-[0.3em] uppercase">
                                         <span className="block text-gold">Dheeraj Anand</span>
                                         <span className="opacity-40 text-[8px]">18 Years Institutional Expertise</span>
                                     </div>
                                 </Link>
                            </div>

                            <p className="font-body text-[15px] md:text-lg text-glacier/60 leading-relaxed mb-6 italic">
                                Bworth is the lifestyle arm of RISEMATE VENTURE. Repurposing fashion for a sovereign future.
                            </p>
                            <p className="font-body text-sm text-glacier/40 leading-relaxed mb-8">
                                Founded in April 2024 in Gurugram, Bworth engineers circular apparel ecosystems to eliminate wardrobe clutter and landfill emissions through high-fashion utility.
                            </p>

                            <div className="mb-12">
                                 <Link href="https://bworth.co.in/" target="_blank" className="font-industrial text-[10px] tracking-[0.4em] text-gold border-b border-gold/20 pb-2 hover:border-gold transition-all uppercase inline-block">
                                    Explore Nexus →
                                 </Link>
                            </div>

                            <div className="flex flex-col gap-6 font-industrial text-[10px] md:text-xs tracking-[0.3em]">
                                <div className="flex items-center gap-4">
                                    <span className="w-12 h-px bg-gold" />
                                    <span>PREMIUM SUSTAINABLE FABRICS</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="w-12 h-px bg-gold/30" />
                                    <span>NATIONAL SUPPLY CHAIN EXCELLENCE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. VEGAVRUDHI - Managed Sales & Staffing */}
                <section ref={vegaSect.ref} className="py-24 md:py-48 px-6 md:px-24 bg-gold/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                         <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                    </div>

                    <div className={`flex flex-col lg:flex-row-reverse gap-12 md:gap-24 items-center transition-all duration-1000 ${vegaSect.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 md:translate-x-40'}`}>
                        <div className="w-full lg:w-3/5 relative">
                            <div className="aspect-[16/10] bg-dark/5 rounded-sm overflow-hidden relative editorial-shadow group">
                                <Link href="https://www.vegavruddhi.com/" target="_blank">
                                    <Image 
                                        src="/VEGA.png" 
                                        fill 
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                        className="object-contain p-8 md:p-16 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                                        alt="Vegavrudhi Managed Services" 
                                    />
                                    <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/0 transition-colors" />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/5">
                            <span className="font-industrial text-gold tracking-widest text-base md:text-lg mb-4 block uppercase">02 · VEGAVRUDHI</span>
                            <h2 className="font-headline italic text-5xl md:text-7xl mb-8 leading-tight">Real <br /> Growth.</h2>
                            <p className="font-body text-[15px] md:text-lg text-glacier/60 leading-relaxed mb-6 italic">
                                India’s most trusted growth engine for managed sales, staffing, and customer engagement.
                            </p>
                            <p className="font-body text-sm text-glacier/40 leading-relaxed mb-8">
                                From fintech to FMCG, urban hubs to rural markets—Vegavrudhi (Sanskrit for 'Growth') builds sovereign revenue streams through transparent, ethical, and value-first execution.
                            </p>
                            
                            <div className="flex flex-col gap-4 mb-12">
                                <div className="flex items-center gap-3 font-industrial text-[9px] tracking-[0.3em] text-gold/60">
                                     <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                                     <span>INTEGRITY · OWNERSHIP · EXCELLENCE</span>
                                </div>
                            </div>

                            <Link href="https://www.vegavruddhi.com/" target="_blank" className="w-full md:w-auto inline-block border border-gold/30 px-10 py-4 text-[10px] md:text-xs font-industrial tracking-[0.4em] hover:bg-gold hover:text-dark transition-all uppercase text-center">
                                Scale Your Team
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 3. RYM GRENERGY - Deep Tech / AI / Power */}
                <section ref={rymSect.ref} className="py-24 md:py-48 px-6 md:px-24 bg-dark relative overflow-hidden">
                    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 transition-all duration-1000 ${rymSect.isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="lg:col-span-12 mb-16 md:mb-24">
                            <span className="font-industrial text-gold tracking-widest text-base md:text-lg mb-4 block uppercase whitespace-nowrap">03 · RYM GRENERGY</span>
                            <h2 className="font-headline italic text-4xl md:text-8xl lg:text-[10rem] leading-none text-glacier/10 lg:text-right uppercase">Power <br className="lg:hidden" /> & Precision</h2>
                        </div>

                        <div className="lg:col-span-5 flex flex-col justify-center relative z-10">
                            <h3 className="font-headline italic text-4xl md:text-5xl mb-8">The Industrial <br /> Mind.</h3>
                            <p className="font-body text-[15px] md:text-lg text-glacier/60 leading-relaxed italic mb-6">
                                A deep-tech powerhouse engineering India's most resilient AI-powered inverters and IoT automation systems. 
                            </p>
                            <p className="font-body text-sm text-glacier/40 leading-relaxed mb-8">
                                Born from a bold vision to develop the world's greenest battery infrastructure, <span className="text-gold opacity-80">RYM Grenergy</span> now commands a sovereign ecosystem spanning ULTRON energy platforms, INTELLEXA document intelligence, and seismic early-warning networks at IIT Roorkee.
                            </p>
                            
                            <div className="flex flex-col gap-6 mb-12">
                                <div className="flex items-center gap-6">
                                    <div className="bg-gold/10 px-4 py-2 border border-gold/20 font-industrial text-[9px] tracking-[0.3em] text-gold uppercase">
                                        KPIT SPARKLE GOLD WINNER
                                    </div>
                                    <div className="h-px flex-grow bg-gold/10" />
                                </div>
                                <div className="flex flex-wrap gap-x-8 gap-y-4 font-industrial text-[10px] tracking-[0.4em] text-glacier/40 uppercase">
                                    <span>ULTRON</span>
                                    <span>INTELLEXA</span>
                                    <span>WEIGHBRIDGE AI</span>
                                    <span>EEW SEISMIC</span>
                                </div>
                            </div>

                            <Link href="https://rymgrenergy.com/" target="_blank" className="w-full md:w-auto inline-block border border-gold/30 px-10 py-4 text-[10px] md:text-xs font-industrial tracking-[0.4em] hover:bg-gold hover:text-dark transition-all uppercase text-center">
                                Explore Solutions
                            </Link>
                        </div>

                        <div className="lg:col-span-7 relative group">
                            <Link href="https://rymgrenergy.com/" target="_blank">
                                <div className="aspect-[16/10] bg-gold/10 p-1 border border-gold/20 rounded-sm relative overflow-hidden editorial-shadow">
                                    <div className="absolute inset-0 bg-dark/20 mix-blend-overlay z-10" />
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH5JFQ6lKeCHRwYVk-nmGmrzVERwoR8koV4BMK1m7pQTE5itXG19jU_DxtJtv0WbF3YNxN_WLGDmqHSihmhOf5QthZ0EulUlopyyhZ28vn-5VoCD6l5qpCxgnX6MIcv6m97KjEMguarFfrqPxLrb4DfDKtS-OazBT75JEgls8jRJz4mXlTWke0oCnkXzjFw5wFZSIh15ibK9LgLHKncbMSdkFxDVbDP4J6WHZfXvGeMhZZksSuQek2i-npV1E0tiTUnd_GwldlHKCo"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 58vw"
                                        className="object-cover grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                                        alt="RYM Grenergy Deep Tech"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                                    <div className="absolute bottom-12 left-12 right-12 z-20">
                                         <div className="flex justify-between items-end">
                                             <div className="font-industrial text-[10px] tracking-[0.5em] text-gold uppercase opacity-80">Active Deployments</div>
                                             <div className="font-headline italic text-4xl text-glacier">24/7 Monitoring</div>
                                         </div>
                                         <div className="w-full h-px bg-gold/20 mt-4" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 4. Synchronous - Digital Build */}
                <section ref={syncSect.ref} className="py-24 md:py-48 px-6 md:px-24 bg-gold text-dark relative -mb-32 md:-mb-64 editorial-shadow z-20">
                    <div className={`transition-all duration-1000 ${syncSect.isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center">
                            {/* Logo / Brand Mark Side */}
                            <div className="lg:col-span-7 order-2 lg:order-1">
                                <Link href="https://www.synchronousbuilddigital.com/" target="_blank">
                                    <div className="aspect-[16/10] bg-dark/5 rounded-sm overflow-hidden relative editorial-shadow group border border-dark/10">
                                        <Image 
                                            src="/SYNC.png" 
                                            fill 
                                            sizes="(max-width: 1024px) 100vw, 60vw"
                                            className="object-contain p-8 md:p-20 transition-all duration-1000 group-hover:scale-105" 
                                            alt="Synchronous Build Digital" 
                                        />
                                        <div className="absolute inset-0 bg-dark/5 group-hover:bg-dark/0 transition-colors" />
                                    </div>
                                </Link>
                                <div className="mt-8 flex items-center gap-6">
                                     <div className="w-12 h-12 rounded-full border border-dark/20 p-1">
                                         <div className="w-full h-full rounded-full bg-dark/10 overflow-hidden relative">
                                             <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center text-dark/40 text-sm">person</span>
                                         </div>
                                     </div>
                                     <div className="font-industrial text-[10px] tracking-[0.3em] uppercase">
                                         <span className="block font-bold">Devam Srivastava</span>
                                         <span className="opacity-40 text-[8px]">Founder & CEO · Digital Architect</span>
                                     </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="lg:col-span-5 order-1 lg:order-2">
                                <span className="font-industrial tracking-widest text-sm md:text-base mb-4 block uppercase font-bold text-dark/60">04 · SYNCHRONOUS</span>
                                <h2 className="font-headline italic text-5xl md:text-7xl mb-8 leading-tight">Growth <br /> Architecture.</h2>
                                
                                <p className="font-body text-lg md:text-xl leading-relaxed mb-6 italic">
                                    Surgical precision in digital expansion. 
                                </p>
                                <p className="font-body text-sm leading-relaxed mb-12 opacity-80">
                                    A high-performance technical and marketing arm bridging aesthetic excellence with $2.4B industrial scale via neural scaling and headless logic.
                                </p>
                                
                                <div className="grid grid-cols-2 gap-8 mb-12 border-y border-dark/10 py-8">
                                     <div className="group">
                                         <span className="font-industrial text-3xl block font-bold mb-1 tracking-tighter">3.2<span className="text-xs">x</span></span>
                                         <span className="font-industrial text-[8px] tracking-[0.3em] opacity-40 uppercase">Avg ROI</span>
                                     </div>
                                     <div className="group">
                                         <span className="font-industrial text-3xl block font-bold mb-1 tracking-tighter">50<span className="text-xs">+</span></span>
                                         <span className="font-industrial text-[8px] tracking-[0.3em] opacity-40 uppercase">Projects</span>
                                     </div>
                                </div>

                                <div className="grid grid-cols-2 gap-y-6 gap-x-4 font-industrial text-[9px] tracking-[0.2em] uppercase font-bold mb-12">
                                    <div className="flex flex-col">
                                        <span className="opacity-40 mb-1">Architecture</span>
                                        <span>HEADLESS SOLUTIONS</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="opacity-40 mb-1">Marketing</span>
                                        <span>NEURAL SCALING</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="opacity-40 mb-1">Sovereign Ops</span>
                                        <span>AI AUTOMATION</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="opacity-40 mb-1">Commercials</span>
                                        <span>ROAS OPTIMIZATION</span>
                                    </div>
                                </div>

                                <Link href="https://www.synchronousbuilddigital.com/" target="_blank" className="font-industrial text-[10px] tracking-[0.4em] border-b-2 border-dark pb-2 hover:opacity-60 transition-all uppercase inline-block font-bold">
                                    Activate Cycle →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Global Footer / CTA */}
                <section className="py-48 md:py-64 px-6 md:px-24 bg-dark border-t border-white/5">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-headline italic text-5xl md:text-8xl text-glacier mb-12 italic">Join the Kingdom.</h2>
                        <Link href="/#contact" className="w-full md:w-auto bg-gold text-dark font-industrial text-lg md:text-xl tracking-[0.4em] px-16 py-6 inline-block hover:scale-105 transition-all uppercase">
                            Acquire Details →
                        </Link>
                    </div>
                </section>

                <footer className="bg-dark py-12 px-8 md:px-24 border-t border-white/5">
                    <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                        <div className="font-industrial text-gold-premium tracking-[0.6em] text-3xl uppercase">RISEMATE VENTURE</div>
                        <p className="font-body text-[10px] uppercase tracking-widest opacity-20">© 2024 RISEMATE VENTURE. ASSETS OF EXCELLENCE.</p>
                    </div>
                </footer>
            </main>
        </div>
    );
}
