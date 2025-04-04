import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-100 font-sans">
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white">Arawole Mercy</h1>
          <p className="mt-4 text-xl text-blue-400 font-medium">
            Full Stack Developer
          </p>
        </header>

        {/* About */}
        <section className="bg-gray-900 p-8 rounded-3xl shadow-2xl mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            I am a passionate and results-driven Full-Stack Developer with a
            strong focus on backend development and solid experience in frontend
            technologies. Skilled in designing, developing, and maintaining
            scalable and efficient APIs, as well as building responsive and
            user-friendly web applications. Experienced in working with modern
            frameworks to create seamless and high-performing solutions. Thrives
            in collaborative environments, continuously learning and adapting to
            new technologies to deliver high-quality software solutions.
          </p>
        </section>

        {/* Projects */}
        <section className="bg-gray-900 p-8 rounded-3xl shadow-2xl mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Projects</h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Doxa - Document-Oriented DBMS (Full Stack)
                <span className="block text-sm text-blue-400 mt-1">
                  [{" "}
                  <a
                    href="https://github.com/Mercy-Techy/Doxa-Frontend"
                    target="_blank"
                    className="hover:underline"
                  >
                    Frontend
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://github.com/Mercy-Techy/Doxa-Backend"
                    target="_blank"
                    className="hover:underline"
                  >
                    Backend
                  </a>{" "}
                  ]
                </span>
              </h3>
              <ul className="list-disc list-inside ml-4 text-base text-gray-300 marker:text-blue-400">
                <li>
                  Built a document-oriented database system supporting
                  multimedia storage and real-time file viewing (if file is an
                  image or video).
                </li>
                <li>
                  Integrated MongoDB for flexible document storage and
                  Cloudinary for media handling.
                </li>
                <li>
                  Enabled seamless document retrieval and file downloads via a
                  user-friendly interface.
                </li>
                <li>
                  Utilized JavaScript, Express.js, TypeScript, React, Tanstack
                  Query, MongoDB, and Cloudinary.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Project Management App
                <span className="block text-sm text-blue-400 mt-1">
                  [{" "}
                  <a
                    href="https://github.com/Mercy-Techy/project-management-app"
                    target="_blank"
                    className="hover:underline"
                  >
                    Repo
                  </a>{" "}
                  ]
                </span>
              </h3>
              <ul className="list-disc list-inside ml-4 text-base text-gray-300 marker:text-blue-400">
                <li>Enabled the creation, editing and removal of projects.</li>
                <li>
                  Enabled the creation, editing and removal of task under each
                  projects.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Skill Remit - Artisan Connect API
                <span className="block text-sm text-blue-400 mt-1">
                  [ Not shareable - Company Project ]
                </span>
              </h3>
              <ul className="list-disc list-inside ml-4 text-base text-gray-300 marker:text-blue-400">
                <li>
                  Developed an API connecting clients with artisans for job
                  opportunities.
                </li>
                <li>
                  Implemented job posting, application management, and payment
                  processing features.
                </li>
                <li>
                  Utilized NestJS, MongoDB, and Cloudinary for efficient backend
                  operations.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Afriko Hub
                <span className="block text-sm text-blue-400 mt-1">
                  [ Not shareable - Company Project ]
                </span>
              </h3>
              <ul className="list-disc list-inside ml-4 text-base text-gray-300 marker:text-blue-400">
                <li>
                  Developed an API that permits the uploading, purchasing, and
                  download of quality images.
                </li>
                <li>Integrated the API with the frontend design.</li>
                <li>
                  Utilized JavaScript, Express.js, TypeScript, and MongoDB for
                  efficient backend operations.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Lagos State Monitoring & Evaluation Platform
                <span className="block text-sm text-blue-400 mt-1">
                  [ Not shareable - Company Project ]
                </span>
              </h3>
              <ul className="list-disc list-inside ml-4 text-base text-gray-300 marker:text-blue-400">
                <li>
                  Designed a multi-level platform to monitor and evaluate
                  development activities across pillars, goals, initiatives, and
                  activities.
                </li>
                <li>
                  Implemented department-level access, role selection, and
                  reporting features.
                </li>
                <li>
                  Built with a scalable MongoDB schema for performance and
                  efficiency.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-gray-900 p-8 rounded-3xl shadow-2xl mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Node.js",
              "Express.js",
              "NestJS",
              "MongoDB",
              "TypeScript",
              "Swagger",
              "Cloudinary",
              "Postman",
              "Python",
              "Git",
              "HTML",
              "CSS",
              "Bootstrap",
              "React.js",
              "Tailwind CSS",
              "Redux Query",
              "Tanstack Query",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gray-900 p-8 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Contact</h2>
          <ul className="space-y-4 text-lg text-gray-300">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <a
                href="mailto:oluwagbemiro65@gmail.com"
                className="hover:underline"
              >
                oluwagbemiro65@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-400" />
              07025859461
            </li>
            <li className="flex items-center gap-2">
              <FaGithub className="text-blue-400" />
              <a
                href="https://github.com/Mercy-Techy"
                className="hover:underline"
                target="_blank"
              >
                github.com/Mercy-Techy
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-blue-400" />
              <a
                href="https://www.linkedin.com/in/arawole-mercy-37b799264"
                className="hover:underline"
                target="_blank"
              >
                linkedin.com/in/arawole-mercy-37b799264
              </a>
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}
