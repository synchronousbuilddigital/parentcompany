"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.3 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
};

const ContactCard = ({ title, email, phone, icon }) => (
    <motion.div 
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        className="p-10 bg-white border border-dark/5 rounded-[40px] hover:shadow-2xl transition-all duration-700 group"
    >
        <div className="w-12 h-12 bg-blue-600/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-700">
            <span className="material-symbols-outlined">{icon}</span>
        </div>
        <h3 className="text-xl font-black text-dark mb-6 tracking-tight uppercase tracking-widest">{title}</h3>
        <div className="space-y-4">
            <a href={`mailto:${email}`} className="block text-sm font-secondary text-dark/60 hover:text-blue-600 transition-colors">{email}</a>
            {phone && <a href={`tel:${phone.replace(/\s+/g, '')}`} className="block text-sm font-secondary text-dark/60 hover:text-blue-600 transition-colors">{phone}</a>}
        </div>
    </motion.div>
);

export default function Contact() {
    return (
        <div className="bg-[#fdfdfd] min-h-screen selection:bg-blue-600 selection:text-white">
            <Navbar />

            <main className="pt-24">
                {/* HERO */}
                <section className="py-20 md:py-32 px-6 md:px-24 border-b border-dark/5">
                    <div className="max-w-screen-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="text-xs font-black uppercase tracking-[0.6em] text-blue-600 mb-8 block">Initialize Connection</span>
                            <h1 className="text-6xl md:text-[10rem] font-black leading-[0.85] text-dark tracking-tighter mb-12">
                                Nexus <br />
                                <span className="text-dark/20 italic">Collective.</span>
                            </h1>
                            <p className="text-xl md:text-3xl text-dark/40 font-secondary max-w-4xl border-l-4 border-blue-600/20 pl-12 py-4 italic">
                                Bridge the gap between institutional expertise and your sovereign growth. Our global operations are active across all regional hubs.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* CONTACT GRID */}
                <section className="py-24 px-6 md:px-24">
                    <div className="max-w-screen-2xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <ContactCard 
                                title="BWorth Support" 
                                email="info@bworth.co.in" 
                                phone="+91 8826668050" 
                                icon="eco"
                            />
                            <ContactCard 
                                title="Vega Vrudhi" 
                                email="saurabh@vegavruddhi.com" 
                                phone="+91 91166 16636" 
                                icon="precision_manufacturing"
                            />
                            <ContactCard 
                                title="RYM Grenergy" 
                                email="contact@rym-grenergy.com" 
                                phone="+91 82000 55645" 
                                icon="bolt"
                            />
                            <ContactCard 
                                title="Synchronous" 
                                email="ops@synchronous.digital" 
                                icon="hub"
                            />
                        </div>
                    </div>
                </section>

                {/* LOCATIONS */}
                <section className="py-24 bg-white px-6 md:px-24">
                    <div className="max-w-screen-2xl mx-auto">
                        <motion.div 
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="whileInView"
                            className="flex flex-col md:flex-row justify-between items-end mb-24"
                        >
                            <h2 className="text-4xl md:text-7xl font-black text-dark tracking-tighter">Global <br /> Headquarters</h2>
                            <div className="h-[1px] flex-grow bg-dark/5 mx-12 hidden md:block" />
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-dark/30 mt-6 md:mt-0">Operational Ref: HQ_SYNC_2026</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <motion.div 
                                variants={fadeInUp}
                                initial="initial"
                                whileInView="whileInView"
                                className="group p-16 bg-[#f8f9fa] rounded-[60px] relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-all duration-1000" />
                                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-600 mb-10 block">Institutional NCR</span>
                                <h3 className="text-4xl md:text-5xl font-black text-dark mb-8">Gurugram</h3>
                                <p className="text-xl text-dark/60 font-secondary leading-relaxed mb-12">
                                    7th Floor, Spaze Plazo, <br />
                                    Golf Course Ext. Road Sector – 69.
                                </p>
                                <div className="flex gap-4">
                                    <span className="px-4 py-2 bg-white rounded-xl text-[10px] font-black uppercase tracking-widest border border-dark/5">Main Hub</span>
                                    <span className="px-4 py-2 bg-white rounded-xl text-[10px] font-black uppercase tracking-widest border border-dark/5">Operations</span>
                                </div>
                            </motion.div>

                            <motion.div 
                                variants={fadeInUp}
                                initial="initial"
                                whileInView="whileInView"
                                className="group p-16 bg-[#f8f9fa] rounded-[60px] relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-all duration-1000" />
                                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-gold mb-10 block">Royal Heritage Hub</span>
                                <h3 className="text-4xl md:text-5xl font-black text-dark mb-8">Jaipur</h3>
                                <p className="text-xl text-dark/60 font-secondary leading-relaxed mb-12">
                                    Vinayak Enclave, <br />
                                    Jagatpura.
                                </p>
                                <div className="flex gap-4">
                                    <span className="px-4 py-2 bg-white rounded-xl text-[10px] font-black uppercase tracking-widest border border-dark/5">Satellite Office</span>
                                    <span className="px-4 py-2 bg-white rounded-xl text-[10px] font-black uppercase tracking-widest border border-dark/5">Strategy Hub</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FORM SECTION (Optional Placeholder) */}
                <section className="py-24 bg-dark text-white overflow-hidden relative">
                    <div className="container-wide relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <motion.div 
                                variants={fadeInUp}
                                initial="initial"
                                whileInView="whileInView"
                            >
                                <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter">Ready to <br /><span className="text-blue-500">Initialize?</span></h2>
                                <p className="text-xl text-white/40 font-secondary italic leading-relaxed max-w-lg mb-12">
                                    Send us your institutional mandate and our board will review your partnership profile within 48 operational hours.
                                </p>
                                <div className="space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-[1px] bg-blue-600" />
                                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 italic">Global Registry Verification Active</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                variants={fadeInUp}
                                initial="initial"
                                whileInView="whileInView"
                                className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[40px]"
                            >
                                <form className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 block ml-4">Full Identity</label>
                                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-600 outline-none transition-all" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 block ml-4">Corporate Email</label>
                                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-600 outline-none transition-all" placeholder="exec@corporation.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40 block ml-4">Mandate Details</label>
                                        <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-600 outline-none transition-all" placeholder="Brief overview of partnership goals..."></textarea>
                                    </div>
                                    <button className="w-full bg-blue-600 hover:bg-white hover:text-dark text-white py-6 rounded-2xl text-xs font-black uppercase tracking-[0.6em] transition-all duration-700 shadow-2xl">
                                        Transmit Mandate
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
