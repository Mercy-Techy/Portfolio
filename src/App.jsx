


import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function App() {
  return (
    <main className="bg-slate-50 text-gray-800 font-sans">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl font-extrabold"
        >
          Arawole <span className="text-violet-500">Mercy</span>
        </motion.h1>

        <p className="text-xl text-gray-600 mt-4">
          Backend Focused Full Stack Developer
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="#projects"
            className="bg-violet-500 text-white px-6 py-3 rounded-lg hover:bg-violet-600 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-violet-500 px-6 py-3 rounded-lg hover:bg-violet-100 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">

        {/* ABOUT */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-6">
            About Me
            <span className="block h-1 w-20 bg-violet-500 mt-2"></span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            I am a passionate and results-driven Full Stack Developer with a
            strong focus on backend engineering. I specialize in building
            scalable APIs, designing efficient architectures, and developing
            responsive web applications that deliver excellent user experience.
          </p>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-10">
            Projects
            <span className="block h-1 w-20 bg-violet-500 mt-2"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-2">Talenter API</h3>

              <p className="text-gray-600 mb-4">
                It is an API for a platform that connects artisans and clients together. Client request for services from artisans thereby providing job opportunities for artisans
              </p>

              <a
                href="https://github.com/Mercy-Techy/Talenter"
                target="_blank"
                className="text-violet-500 hover:underline"
              >
                View Repository →
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-2">VisualStock API</h3>

              <p className="text-gray-600 mb-4">
                It is an Api for a content repository that allows individuals to sell their images and videos on the platform, while also providing users with easy access to high-quality visual content for their personal or professional needs.
              </p>

              <a
                href="https://github.com/Mercy-Techy/VisualStock"
                target="_blank"
                className="text-violet-500 hover:underline"
              >
                View Repository →
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-2">EventDrop</h3>

              <p className="text-gray-600 mb-4">
                A website for creating and managing event-based photo galleries. Event owners can create events, generate unique upload links, and allow guests to upload photos without authentication. Supports real-time updates using Socket.IO, photo moderation, likes/comments, and optional premium features.
              </p>

              <div className="flex gap-4">
                <a
                href="https://github.com/Mercy-Techy/EventDrop-Website"
                target="_blank"
                className="text-violet-500 hover:underline"
              >
                View Repository →
              </a>
                <a
                href="https://event-drop-website.vercel.app/"
                target="_blank"
                className="text-violet-500 hover:underline"
              >
                Live Link →
              </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-2">EventDrop API</h3>

              <p className="text-gray-600 mb-4">
                An API for a platform for creating and managing event-based photo galleries. Event owners can create events, generate unique upload links, and allow guests to upload photos without authentication. Supports real-time updates using Socket.IO, photo moderation, likes/comments, and optional premium features.
              </p>

              <a
                href="https://github.com/Mercy-Techy/EventDrop-API"
                target="_blank"
                className="text-violet-500 hover:underline"
              >
                View Repository →
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-2">Doxa Document DBMS</h3>

              <p className="text-gray-600 mb-4">
                Document oriented DBMS supporting multimedia storage with a
                full stack web interface.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Mercy-Techy/Doxa-Backend"
                  target="_blank"
                  className="text-violet-500 hover:underline"
                >
                  Backend →
                </a>

                <a
                  href="https://github.com/Mercy-Techy/Doxa-Frontend"
                  target="_blank"
                  className="text-violet-500 hover:underline"
                >
                  Frontend →
                </a>
                <a
                  href="https://doxa-rho.vercel.app"
                  target="_blank"
                  className="text-violet-500 hover:underline"
                >
                  Live Link →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-2">Chat-app API</h3>

              <p className="text-gray-600 mb-4">
                A simple REST Chat API built with Node.js and Express. It allows creating users, sending messages, and retrieving chat history between two users. The project is intentionally basic and easy to extend.
              </p>

              <a
                href="https://github.com/Mercy-Techy/chat-app-backend"
                target="_blank"
                className="text-violet-500 hover:underline"
              >
                View Repository →
              </a>
            </div>

          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-10">
            Skills
            <span className="block h-1 w-20 bg-violet-500 mt-2"></span>
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "JavaScript","TypeScript",
              "Node.js",
              "Express.js",
              "NestJS",
              "MongoDB",
              "PostgreSQL",
              "React",
              "Tailwind",
              "Tanstack Query",
              "Swagger",
              "Cloudinary",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-violet-100 text-violet-600 px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-10">
            Contact
            <span className="block h-1 w-20 bg-violet-500 mt-2"></span>
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-violet-500" />
              <a href="mailto:oluwagbemiro65@gmail.com">
                oluwagbemiro65@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaPhone className="text-violet-500" />
              07025859461
            </li>

            <li className="flex items-center gap-3">
              <FaGithub className="text-violet-500" />
              <a href="https://github.com/Mercy-Techy" target="_blank">
                github.com/Mercy-Techy
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaLinkedin className="text-violet-500" />
              <a
                href="https://www.linkedin.com/in/arawole-mercy-37b799264"
                target="_blank"
              >
                linkedin.com/in/arawole-mercy-37b799264
              </a>
            </li>
          </ul>
        </motion.section>

        <footer className="text-center text-gray-500 pb-10">
          © {new Date().getFullYear()} Arawole Mercy
        </footer>

      </div>
    </main>
  );
}