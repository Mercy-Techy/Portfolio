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
          <p className="text-base leading-relaxed text-gray-300">
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
                Backend Developer – Lagos State Ministry of Economic Budget and
                Planning Web Application
                <span className="block text-sm text-blue-400 mt-1">
                  [ Not shareable - Company Project ]
                </span>
                <span className="block text-sm text-blue-400 mt-1 italic">
                  Technologies: NestJS, MongoDB, AWS S3, Swagger UI, JWT.
                </span>
              </h3>
              <span className="block text-gray-300 text-base my-2">
                A web application for the Lagos State Ministry of Economic
                Planning, featuring both a public website and an admin CMS. The
                website provides access to departmental reports, publications,
                and details about principal officers. The CMS enables the
                management of reports, publications, departments, and officers,
                including content editing and updates.
              </span>
              <ul className="list-disc list-inside ml-4 text-base text-gray-300 marker:text-blue-400">
                <li>
                  Developed the API using nestjs and integrated MongoDB for data
                  storage and AWS S3 for file storage.
                </li>
                <li>
                  Implemented and developed authentication endpoints for the CMS
                  using JWT.
                </li>
                <li>
                  Developed endpoints for the creation and editing of principal
                  officers, departments and so on. Also developed endpoints for
                  uploading new reports and publications to AWS.
                </li>
                <li>
                  Developed endpoints for fetching required data for both the
                  website and the CMS .
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Full Stack Developer – Doxa (Document Oriented DBMS) Web
                Application
                <span className="block text-sm text-blue-400 mt-1">
                  [{" "}
                  <a
                    href="https://github.com/Mercy-Techy/Doxa-Frontend"
                    target="_blank"
                    className="hover:underline"
                  >
                    Frontend Repo
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://github.com/Mercy-Techy/Doxa-Backend"
                    target="_blank"
                    className="hover:underline"
                  >
                    Backend Repo
                  </a>{" "}
                  ]
                </span>
                <span className="block text-sm text-blue-400 mt-1 italic">
                  Technologies: Express.js, MongoDB, Cloudinary, Postman,
                  TypesScript, React Js, Tanstack Query, Tailwind CSS.
                </span>
              </h3>
              <span className="block text-gray-300 text-base my-2">
                Doxa is a document oriented database management system
                supporting multimedia storage.
              </span>
              <ul className="list-disc list-inside ml-4 text-base text-gray-300 marker:text-blue-400">
                <li>
                  Developed the API using express js and typescript and
                  integrated MongoDB for data storage and Cloudinary for media
                  handling.
                </li>
                <li>
                  Developed endpoints for authentication and also for fetching,
                  creating, editing, deleting of databases, collections and
                  documents.
                </li>
                <li>
                  Designed the required interfaces based on the UI and
                  integrated them with the necessary endpoints.
                </li>
                <li>
                  Deployed the frontend to vercel and the backend to render.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Backend Developer - Talenter Application
                <span className="block text-sm text-blue-400 mt-1">
                  [{" "}
                  <a
                    href="https://github.com/Mercy-Techy/Talenter"
                    target="_blank"
                    className="hover:underline"
                  >
                    Repo
                  </a>{" "}
                  ]
                </span>
                <span className="block text-sm text-blue-400 mt-1 italic">
                  Technologies: NestJS, MongoDB, Cloudinary, Swagger UI, JWT.
                </span>
              </h3>
              <span className="block text-gray-300 text-base my-2">
                Talenter is an application that connects clients with artisans
                for job opportunities and service requests.
              </span>
              <ul className="list-disc list-inside ml-4 text-base text-gray-300 marker:text-blue-400">
                <li>
                  Developed the API using nestjs and integrated MongoDB for data
                  storage and Cloudinary for file handling.
                </li>
                <li>
                  Developed endpoints for authentication, for job posting,
                  application and acceptance, for payment and many more
                  features.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Full Stack Developer - Afriko Hub Web Application
                <span className="block text-sm text-blue-400 mt-1">
                  [ Not shareable - Company Project ]
                </span>
                <span className="block text-sm text-blue-400 mt-1 italic">
                  Technologies: Express.js, MongoDB, Azure, Postman,
                  TypesScript, React Js, Redux Query, Tailwind CSS
                </span>
              </h3>
              <span className="block text-gray-300 text-base my-2">
                Afriko Hub is a platform where users (contributors) can upload
                their images for sale which can be bought by other users.
              </span>
              <ul className="list-disc list-inside ml-4 text-base text-gray-300 marker:text-blue-400">
                <li>
                  Developed the API using express js and typescript and
                  integrated MongoDB for data storage and Azure for file
                  handling.
                </li>
                <li>
                  Developed endpoints for authentication, for uploading, viewing
                  and purchasing of images and endpoints for the admin dashboard
                  that oversees the whole application.{" "}
                </li>
                <li>
                  Deployed the API to azure and automated redeployment via
                  github actions.
                </li>
                <li>
                  Integrated the endpoints with the design interfaces developed
                  by the designer.
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
                <span className="block text-sm text-blue-400 mt-1 italic">
                  Technologies: React, Tailwind CSS.
                </span>
              </h3>
              <span className="block text-gray-300 text-base my-2">
                A web application that permits the creation, editing and
                deleting of projects and tasks under each projects.
              </span>
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
                Post Partum Depression Website
                <span className="block text-sm text-blue-400 mt-1">
                  [{" "}
                  <a
                    href="https://github.com/Mercy-Techy/post-partum-depression-model-frontend"
                    target="_blank"
                    className="hover:underline"
                  >
                    Repo
                  </a>{" "}
                  ]
                </span>
                <span className="block text-sm text-blue-400 mt-1 italic">
                  Technologies: React, Tailwind CSS.
                </span>
              </h3>
              <span className="block text-gray-300 text-base my-2">
                A web application that accepts inputs from users based on how
                they feel to predict their level of post partum depression.
              </span>
              <ul className="list-disc list-inside ml-4 text-base text-gray-300 marker:text-blue-400">
                <li>
                  Developed the model for predicting the disease and hosted it
                  on railway.
                </li>
                <li>
                  Developed the user interface using react and tailwind and
                  hosted it on vercel.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Full Stack Developer - Cebiz Application
                <span className="block text-sm text-blue-400 mt-1">
                  [ Not shareable - Company Project ]
                </span>
                <span className="block text-sm text-blue-400 mt-1 italic">
                  Technologies: Express.js, MongoDB, Cloudinary, Swagger ui,
                  TypesScript, React Js, Tanstack Query, Tailwind CSS
                </span>
              </h3>
              <span className="block text-gray-300 text-base my-2">
                A fintech mobile and website application that permits
                transactions and purchase of services such as airtime, data,
                electricity and so on. Also it connects companies to their
                staff, giving the company an easy method of managing their
                members and paying salaries to each member via wallet transfer.
              </span>
              <ul className="list-disc list-inside ml-4 text-base text-gray-300 marker:text-blue-400">
                <li>
                  Developed the API using express js and typescript and
                  integrated MongoDB for data storage and cloudinary for file
                  handling.
                </li>
                <li>
                  Developed endpoints for onboarding and authenticating both
                  normal users and companies, purchasing of services (airtime,
                  data, electricity and so on), inviting users to a company,
                  payment of salaries to each member of a company and so on.{" "}
                </li>
                <li>
                  Integrated the endpoints with the website interfaces developed
                  by the designer.
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
