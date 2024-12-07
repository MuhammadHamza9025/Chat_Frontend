import React from "react";

const Portfolio = () => {
    return (
        <div className="font-sans">
            {/* Header Section */}
            <header className="bg-gray-900 text-white p-6 text-center">
                <h1 className="text-4xl font-bold">My Portfolio</h1>
                <p className="mt-2">Web Developer | React Enthusiast</p>
            </header>

            {/* About Section */}
            <section className="p-6 bg-gray-100 text-gray-800">
                <h2 className="text-3xl font-bold">About Me</h2>
                <p className="mt-4">
                    Hello! I'm a passionate web developer experienced in building responsive, user-friendly applications. I specialize in React, Tailwind CSS, and modern web technologies.
                </p>
            </section>

            {/* Projects Section */}
            <section className="p-6 bg-white">
                <h2 className="text-3xl font-bold">Projects</h2>
                <ul className="mt-6 grid gap-4 md:grid-cols-2">
                    <li className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Project 1</h3>
                        <p className="mt-2">A task management app built with React.</p>
                    </li>
                    <li className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Project 2</h3>
                        <p className="mt-2">An e-commerce site with responsive design.</p>
                    </li>
                </ul>
            </section>

            {/* Contact Section */}
            <section className="p-6 bg-gray-100 text-gray-800">
                <h2 className="text-3xl font-bold">Contact</h2>
                <p className="mt-4">
                    Feel free to reach out via email:{" "}
                    <a href="mailto:your.email@example.com" className="text-blue-500 underline">
                        your.email@example.com
                    </a>
                </p>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-900 text-white p-4 text-center">
                <p>© 2024 My Portfolio. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Portfolio;
