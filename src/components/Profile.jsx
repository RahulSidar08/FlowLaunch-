'use client';

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

export default function Profile() {
    return (
        <section id='profile' className="max-w-6xl mx-auto px-4 py-10">
            <p className="text-lg text-gray-600 mb-10">
                Welcome to my personal dashboard. Here's a quick overview of who I am and what I do.
            </p>

            <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Left side: Image and contact */}
                <div className="text-center md:text-left">
                    <Image
                        src="/profile.jpg" // Place your image in public folder as 'profile.jpg'
                        alt="Profile"
                        width={300}
                        height={300}
                        className="rounded-lg mx-auto md:mx-0"
                    />

                    <div className="mt-6 space-y-2 text-sm text-gray-700">
                        <p className="flex items-center gap-2 justify-center md:justify-start">
                            <FaEnvelope /> rahulsidar1700@gmail.com
                        </p>
                        <p className="flex items-center gap-2 justify-center md:justify-start">
                            <FaPhone /> +91 6266321306
                        </p>
                        <p className="flex items-center gap-2 justify-center md:justify-start">
                            <FaMapMarkerAlt /> Raipur , India 496223
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-start gap-4 mt-4">
                        <a href="https://github.com/RahulSidar08" className="p-2 border rounded-full hover:bg-gray-100">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/rahul-sidar/" className="p-2 border rounded-full hover:bg-gray-100">
                            <FaLinkedin />
                        </a>
                        <a href="https://x.com/SidarRahul_" className="p-2 border rounded-full hover:bg-gray-100">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* Right side: Info */}
                <div className="md:col-span-2 space-y-4">
                    <h2 className="text-4xl font-bold">Rahul Sidar</h2>
                    <h3 className="text-xl font-medium text-gray-700">Full Stack Developer</h3>
                    <p className="text-lg text-gray-700">
                        Passionate software engineer with expertise in modern web technologies. I love building intuitive user interfaces and scalable backend systems.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-6">
                        <a
                            href="https://drive.google.com/file/d/1kXqR7uVf1RcOa34DPT5MFSQRu4G6Asgt/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white px-5 py-2 rounded hover:opacity-90 font-semibold"
                        >
                            Download Resume
                        </a>
                        <a
                            href="#contact"
                            className="border border-black px-5 py-2 rounded hover:bg-black hover:text-white font-semibold"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
