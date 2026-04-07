"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const leaders = [
    {
        name: "Saurabh Jain",
        role: "Founder & CEO · Vega Vrudhi",
        vision: "Architecting high-performance field-force efficiency through algorithmic sales fulfillment for national growth engines.",
        focus: "Strategic Retail Expansion & End-to-End Lead conversion fulfillment across India's Tier 1 and 2 cities.",
        philosophy: "Building on-ground execution intelligence via precision managed sales infrastructure.",
        logo: "/VEGA.png",
        id: "01"
    },
    {
        name: "Dheeraj Anand",
        role: "Founder & CEO · BWorth",
        vision: "Re-imagining luxury fashion as a circular asset, creating a global movement towards zero-landfill conscious consumerism.",
        focus: "Circular Luxury Fashion, Ethical Upcycling Ecosystems & Sustainable Global Value Chain Integration.",
        philosophy: "Redefining the value of waste through industrial-scale circular luxury fashion architecture.",
        logo: "/BWORTH.jpg",
        id: "02"
    },
    {
        name: "Yograj Rundhanker",
        role: "Founder & CEO · RYM Grenergy",
        vision: "Enabling a carbon-neutral future by developing the world’s greenest battery cell and intelligent green-tech infrastructure.",
        focus: "Clean Energy, AI/ML-driven IoT Innovations & Smart Energy Automation Systems.",
        philosophy: "Harnessing deep-tech intelligence to solve the world's most critical energy challenges.",
        logo: "https://rymgrenergy.com/images/logo.png",
        id: "03"
    },
    {
        name: "Devam Srivastava",
        role: "Founder & CEO · Synchronous",
        vision: "Architecting high-velocity digital ecosystems for high-growth elite brands via algorithmic process automation.",
        focus: "Brand Identity Architecture, Autonomous AI Agents & Predictive Growth Modeling.",
        philosophy: "Scaling institutional legacies through the convergence of high-conversion engineering and supreme aesthetics.",
        logo: "/sync.jpg",
        logoBg: "bg-white",
        id: "04"
    }
];

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

const LeaderCard = ({ leader }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            whileHover={{ y: -20, scale: 1.02 }}
            className="group relative p-10 md:p-16 rounded-[48px] bg-white border border-dark/5 hover:border-blue-600/30 hover:shadow-[0_60px_120px_-20px_rgba(0,18,51,0.15)] transition-all duration-1000 overflow-hidden"
        >
            <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full -translate-y-60 translate-x-60 blur-[120px] transition-all duration-1000 ${isInView ? 'scale-150 opacity-100' : 'scale-50 opacity-0'}`} />

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex flex-col gap-12">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-600 mb-4 block">Executive Tier 0{leader.id}</span>
                            <h2 className="text-4xl md:text-5xl font-black text-dark mb-2 tracking-tighter leading-none group-hover:text-blue-600 transition-colors duration-700">
                                {leader.name}
                            </h2>
                            <p className="text-xs font-black uppercase tracking-[0.3em] text-dark/30 italic">{leader.role}</p>
                        </div>
                        {leader.logo && (
                            <div className={`w-16 h-16 ${leader.logoBg || 'bg-white'} rounded-2xl p-3 border border-dark/5 shadow-xl overflow-hidden flex items-center justify-center transition-all duration-700 group-hover:rotate-12`}>
                                <Image src={leader.logo} alt={leader.name} width={48} height={48} className="object-contain" unoptimized={true} />
                            </div>
                        )}
                    </div>

                    <div className="space-y-10">
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-dark/20 mb-4 px-4 border-l-2 border-blue-600/20">Operational Mandate</h4>
                            <p className="text-lg md:text-xl font-medium text-dark/80 font-secondary leading-relaxed italic pr-12">
                                "{leader.philosophy}"
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-dark/5">
                            <div>
                                <h5 className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-600/60 mb-4">Strategic Vision</h5>
                                <p className="text-sm text-dark/60 font-secondary leading-relaxed">
                                    {leader.vision}
                                </p>
                            </div>
                            <div>
                                <h5 className="text-[9px] font-black uppercase tracking-[0.3em] text-dark/40 mb-4">Core Focus</h5>
                                <p className="text-sm text-dark/60 font-secondary leading-relaxed">
                                    {leader.focus}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-dark/20">Verified Institutional Lead</span>
                    </div>
                    <Link href="/contact" className="group/link flex items-center gap-3">
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-dark border-b border-transparent group-hover/link:border-blue-600 transition-all py-1">Connect</span>
                        <div className="w-8 h-8 rounded-full bg-dark text-white flex items-center justify-center group-hover/link:bg-blue-600 transition-all duration-500">
                             <span className="material-symbols-outlined text-[10px]">north_east</span>
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default function Leadership() {
    return (
        <div className="bg-white min-h-screen selection:bg-blue-600 selection:text-white">
            <Navbar />

            <main className="pt-24">
                {/* HERO */}
                <section className="py-20 md:py-32 px-6 md:px-24">
                    <div className="max-w-[1700px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="text-xs font-black uppercase tracking-[0.6em] text-blue-600 mb-8 block">Registry Governance</span>
                            <h1 className="text-6xl md:text-[9rem] font-black leading-[0.85] text-dark tracking-tighter mb-12">
                                Institutional <br />
                                <span className="text-dark/20 italic">Architects.</span>
                            </h1>
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-l-[4px] border-blue-600 pl-12 py-8">
                                <p className="text-xl md:text-4xl text-dark/60 font-secondary max-w-4xl leading-tight">
                                    The executive governance behind RiseMate Venture. Each leader operates at the nexus of institutional stability and regional opportunity.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* LEADERS GRID */}
                <section className="pb-32 px-6 md:px-24">
                    <div className="max-w-[1700px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                            {leaders.map((leader) => (
                                <LeaderCard key={leader.id} leader={leader} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* INSTITUTIONAL MANDATE */}
                <section className="py-24 bg-dark text-white overflow-hidden relative">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20" />
                    </div>
                    <div className="container-wide relative z-10 text-center">
                        <motion.div
                             initial={{ opacity: 0, scale: 0.9 }}
                             whileInView={{ opacity: 1, scale: 1 }}
                             viewport={{ once: true }}
                             transition={{ duration: 1.5 }}
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-500 mb-8 block">Governance Standard</span>
                            <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter">Unified Collective Excellence</h2>
                            <p className="text-xl md:text-2xl text-white/40 font-secondary max-w-4xl mx-auto italic mb-16">
                                "Our leadership is defined not by individual success, but by the sovereign performance of the conglomerate as a unified architectural unit."
                            </p>
                            <Link href="/contact" className="inline-flex items-center gap-6 group bg-white text-dark px-12 py-6 rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-all duration-700">
                                Join the Executive Network
                                <span className="material-symbols-outlined group-hover:rotate-45 transition-transform">north_east</span>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
