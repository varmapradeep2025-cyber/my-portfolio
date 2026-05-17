

                    
                                      
"use client"
import React, { useState } from 'react';
import {
    Briefcase,
    Code,
    Mail,
    ExternalLink,
    Menu,
    X,
    Monitor,
    ChevronRight
} from 'lucide-react';
import { CldImage } from "next-cloudinary";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const workExperience = [
        { title: 'Campus Ambassador', company: 'GeeksForGeeks' },
        { title: 'Management Team Member', company: 'AmityCodingClu' },
        { title: 'Contibutor', company: 'GirlscriptSummer Of Code' },
        { title: 'Google Developer Program ', company: 'Google for Developers' },

    ];
    const videoProjects = [
        {
            id: 'samples/elephants',
            title: 'Global Retail Redesign',
            desc: 'End-to-end redesign of a global retail experience. Responsible for visual direction, component architecture, and cross-functional alignment across six markets.'
        },
        {
            id: 'samples/sea-turtle',
            title: 'Mobile Banking App',
            desc: 'Led product design for a mobile-first banking application. Delivered a high-fidelity prototype in six weeks with a focus on accessibility and trust signals.'
        },
        {
            id: 'samples/cld-sample-video',
            title: 'Internal Analytics Platform',
            desc: 'Built and shipped an internal analytics tool from concept to launch. Reduced manual reporting time by 60% through smart data visualization and workflow automation.'
        },
        {
            id: 'samples/elephants',
            title: 'Brand Identity System',
            desc: 'Defined and animated a complete brand identity for a growth-stage startup, including motion guidelines for digital and social environments.'
        }
    ];

    return (
        <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-rose-100">

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-rose-50 rounded-lg flex items-center justify-center font-bold text-rose-500 border border-rose-100">S</div>
                        <span className="text-xl font-bold tracking-tight text-zinc-800">Sharon Yelenik</span>
                    </div>

                    <div className="hidden md:flex gap-8 text-sm text-zinc-400 tracking-wide">
                        <a href="#work" className="hover:text-zinc-900 transition-colors">Experience</a>
                        <a href="#projects" className="hover:text-zinc-900 transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-rose-500 transition-colors font-medium text-zinc-600">Contact</a>
                    </div>

                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="min-h-screen flex items-center pt-20 px-6 bg-gradient-to-br from-amber-50/60 via-white to-rose-50/40">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20">


                    {/* Portrait */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative w-72 h-72 md:w-[540px] md:h-[540px] rounded-[3rem] overflow-hidden shadow-2xl shadow-rose-100">
                            <CldImage
                                src="samples/balloons"
                                alt="Profile Image"
                                fill
                                className="object-cover"
                                crop="fill"
                                gravity="face"
                                format="auto"
                                quality="auto"
                                sizes="(max-width: 768px) 288px, 540px"
                            />
                        </div>
                    </div>

                    {/* Intro text */}
                    <div className="text-center md:text-left">
                        <p className="text-rose-400 text-lg italic mb-3">
                            I'm Varma Pradeep,an Artificial Intelligence(A.I)and Machine Learning(ML)student.
                        </p>
                        <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter mb-6 leading-[0.9] uppercase text-zinc-900">
                            Pradeep <br />


                            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-400">Yelenik</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-zinc-500 font-light leading-relaxed mb-10 max-w-lg">
                            Currently,I am exploring and working on my Frontend skills by learning languages like HTML,CSS AND
                            Along with that,practicing DSA to enhance my problem-solving skills.T have completed topics like Hashing,Searching(Linear and Binary Search)and Array(1-D and 2-D),Linked List.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <a href="#contact" className="px-10 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-all hover:scale-105 flex items-center gap-2">
                                Get in Touch <ChevronRight size={18} />
                            </a>
                            <a href="#projects" className="px-10 py-4 border border-zinc-200 text-zinc-600 rounded-full font-light hover:border-rose-300 hover:text-rose-500 transition-all">
                                Explore My Work
                            </a>
                        </div>
                    </div>

                </div>
            </header>

            {/* Work Experience Section */}
            <section id="work" className="py-32 px-6 relative bg-amber-50/20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
                        <div>
                            <div className="flex items-center gap-2 text-amber-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4">
                                <Briefcase size={14} /> My Journey
                            </div>
                            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-zinc-900 uppercase">Work Experience</h2>
                        </div>
                        <p className="text-zinc-400 max-w-sm text-lg font-light leading-snug">
                            Every role teaches you something. Here are the experiences and people that have shaped me.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {workExperience.map((job, idx) => (
                            <div key={idx} className="group relative">
                                <div className="relative h-full min-h-[300px] p-12 flex flex-col justify-end overflow-hidden rounded-[3rem] bg-zinc-900 border border-zinc-800 transition-all duration-700 hover:shadow-2xl hover:shadow-rose-500/10 hover:-translate-y-2">
                                    <p className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">{job.company}</p>
                                    <h3 className="text-3xl font-light text-white">{job.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-32 px-6 bg-rose-50/20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-20">
                        <div className="w-14 h-14 bg-white border border-rose-100 rounded-2xl flex items-center justify-center text-rose-400 shadow-sm">
                            <Code size={28} />
                        </div>
                        <div>
                            <h2 className="text-5xl font-extralight tracking-tight text-zinc-900 uppercase">Selected Projects</h2>
                            <p className="text-zinc-400 text-sm mt-1 italic">The projects I keep coming back to — the ones that taught me the most</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {videoProjects.map((project, idx) => (
                            <div key={idx} className="group space-y-8">
                                <div className="rounded-[2.5rem] overflow-hidden border border-zinc-200 shadow-2xl bg-zinc-200">
                                    <CldVideoPlayer
                                        src={project.id}
                                        width="1280"
                                        height="720"
                                        transformation={{
                                            width: 1280,
                                            height: 720,
                                            crop: 'fill',
                                            gravity: 'auto'
                                        }}
                                    />
                                </div>
                                <div className="px-6">
                                    <h3 className="text-2xl font-light mb-4 text-zinc-900 tracking-tight">{project.title}</h3>
                                    <p className="text-zinc-500 font-light leading-relaxed mb-8 text-lg">
                                        {project.desc}
                                    </p>
                                    <button className="flex items-center gap-3 text-rose-500 font-semibold group text-[10px] uppercase tracking-[0.3em] border-b border-rose-200 pb-2 hover:border-rose-500 transition-colors">
                                        View Case Study <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer / Contact Section */}
            <footer id="contact" className="py-32 px-6 border-t border-rose-50 bg-gradient-to-b from-white to-amber-50/30">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-rose-50 border border-rose-100 rounded-[2.5rem] mb-12 flex items-center justify-center shadow-sm">
                        <Mail size={32} className="text-rose-300" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter mb-8 text-zinc-900 uppercase">Let's Connect!</h2>
                    <p className="text-zinc-400 max-w-lg mb-12 font-light text-lg leading-relaxed">
                        I love meeting curious, creative people. Whether you want to collaborate,
                        have a question, or just want to say hi — my inbox is always open.
                    </p>
                    <a href="mailto:hello@sharonyelenik.com" className="text-2xl md:text-5xl text-zinc-300 hover:text-rose-500 transition-colors border-b-2 border-zinc-100 hover:border-rose-300 pb-4 mb-20 inline-block font-thin tracking-tight">
                        varmapradeep2025@gmail.com
                    </a>

                    <div className="flex gap-8 mb-24 opacity-60 hover:opacity-100 transition-opacity">
                        <a href="#" className="text-zinc-400 hover:text-rose-500 transition-colors"><Monitor size={28} /></a>
                    </div>

                    <div className="w-full pt-16 border-t border-amber-50 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-300 text-[9px] font-mono tracking-[0.4em] uppercase">
                        <p>varmapradeep2025</p>
                        <div className="flex gap-12 text-zinc-400">
                            <a href="#" className="hover:text-rose-500 transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-rose-500 transition-colors">Resume</a>
                            <a href="#" className="hover:text-rose-500 transition-colors">GitHub</a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default App;
