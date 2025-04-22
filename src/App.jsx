import Logo from './assets/Logo.svg'
import SBDLogo from './assets/SBDLogo.svg'
import DMJLogo from './assets/DMJLogo.svg'
import OSLogo from './assets/OSLogo.svg'
import character from './assets/character.png'
import './App.css'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function App() {
    const [osRef, osInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [dmjRef, dmjInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [sbdRef, sbdInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
      <div className="min-h-screen bg-primary text-text text-3xl font-bold font-sans">
        <div className="bg-secondary text-primary flex items-center p-4 sticky top-0 z-10">
          <div className="flex items-center group hover:scale-105 transition-transform duration-300">
            <a href="https://learn.netlabdte.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <img src={Logo} alt="Logo" className="w-12 mr-4 group-hover:scale-105 transition-transform duration-300" />
              <h1 className="text-lg text-primary group-hover:scale-105 transition-transform duration-300 ml-2">Network Laboratory</h1>
            </a>
          </div>
          <div className="ml-auto mr-10 flex space-x-5">
            <a href="/" className="text-primary text-lg hover:scale-105">Home</a>
            <a href="#os" className="text-primary text-lg hover:scale-105">OS</a>
            <a href="#dmj" className="text-primary text-lg hover:scale-105">DMJ</a>
            <a href="#sbd" className="text-primary text-lg hover:scale-105">SBD</a>
          </div>
        </div>
        <div className="p-10 space-y-60">
          <div id="home" className="text-center scroll-mt-20">
            <h2 className="text-4xl font-bold text-secondary mb-10">Welcome to Network Laboratory</h2>
            <img src={Logo} alt="Logo" className="w-20 mx-auto mb-60 group-hover:scale-105 transition-transform duration-300" />
            <div className="animate-bounce text-secondary text-lg font-semibold mt-10">
              Scroll down ↓
            </div>
            <p className="text-primary text-lg">
              Explore the various modules and enhance your knowledge in operating systems, data management, and database systems.
            </p>
          </div>
          <div
            id="os"
            ref={osRef}
            className={`bg-secondary border-2 border-accent rounded-lg p-6 flex justify-between items-center scroll-mt-20 transition-opacity duration-1000 ${
              osInView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <a href="https://learn.netlabdte.com/docs/category/os" target="_blank" rel="noopener noreferrer">
              <img src={OSLogo} alt="OS Logo" className="w-25 mr-5 ml-5 hover:scale-105 transition-transform duration-300" />
            </a>
            <div>
              <h2 className="text-2xl font-bold text-primary ml-8 mb-4">Netlab OS</h2>
              <p className="text-primary text-lg ml-8">
                Netlab OS focuses on operating systems, particularly Ubuntu. It provides hands-on experience with system-level programming, process management, and memory allocation. Students will gain practical knowledge of Ubuntu's core functionalities, including package management, shell scripting, and system configuration.
              </p>
            </div>
          </div>
          <div
            id="dmj"
            ref={dmjRef}
            className={`bg-secondary border-2 border-accent rounded-lg p-6 flex justify-between items-center scroll-mt-20 transition-opacity duration-1000 ${
              dmjInView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Netlab DMJ</h2>
              <p className="text-primary text-lg">
                Netlab DMJ is dedicated to network design and management using Cisco Packet Tracer. It emphasizes practical skills in configuring and troubleshooting networks, enabling students to build and simulate complex network topologies effectively.
              </p>
            </div>
            <a href="https://learn.netlabdte.com/docs/category/dmj" target="_blank" rel="noopener noreferrer">
              <img src={DMJLogo} alt="DMJ Logo" className="w-17 mr-5 ml-5 hover:scale-105 transition-transform duration-300" />
            </a>
          </div>
          <div
            id="sbd"
            ref={sbdRef}
            className={`bg-secondary border-2 border-accent rounded-lg p-6 flex justify-between items-center scroll-mt-20 transition-opacity duration-1000 ${
              sbdInView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <a href="https://learn.netlabdte.com/docs/category/sbd" target="_blank" rel="noopener noreferrer">
              <img src={SBDLogo} alt="SBD Logo" className="w-25 mr-5 ml-5 hover:scale-105 transition-transform duration-300" />
            </a>
            <div>
              <h2 className="text-2xl font-bold text-primary ml-8 mb-4">Netlab SBD</h2>
              <p className="text-primary text-lg ml-8">
                Netlab SBD focuses on database systems, teaching students about relational databases, normalization, and advanced querying techniques. It equips them with the skills to design and manage complex database systems effectively.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="https://instagram.com/fadhlureza" target="_blank" rel="noopener noreferrer">
              <img src={character} alt="Character" className="w-20 mx-auto mb-4 hover:scale-105 transition-transform duration-300 " />
            </a>
            <p className="text-text text-lg">Created by Fadhlureza Sebastian</p>
          </div>
        </div>
      </div>
    );
}

