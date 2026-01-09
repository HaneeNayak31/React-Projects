const projects = [
  {
    title: "Personal Portfolio",
    description:
      `Dynamic Theme System and Custom Hooks, instant theme switching.
single-page application (SPA),modular components,smooth UX, without page reloads, responsive and consistent across all device sizes`,
    tags: ["React","Custom Hooks", "Tailwind CSS","Context API"],
    image: "bg-gradient-to-br from-violet-600 to-indigo-600",
    links: { demo: "#", code: "#" },
  },
  {
    title: "React Quiz",
    description:
      "A quiz application built with React(UseReducer) and CSS.",
    tags: ["React", "UseReducer", "CSS"],
    image: "bg-gradient-to-br from-cyan-500 to-blue-600",
    links: { demo: "#", code: "#" },
  },
  {
    title: "World Wise",
    description:
      "",
    tags: ["React", "Firebase", "Sass"],
    image: "bg-gradient-to-br from-emerald-500 to-teal-600",
    links: { demo: "#", code: "#" },
  },
  {
    title: "Fast-react-pizza",
    description:
      `Built a pizza ordering app- Shows menu,allows user to select the pizzas ,change the
quantity.
,add to cart feature,takes user details for placing order ,
giving priority to order adds charges.After placing order shows the order status`,
    tags: ["React","React Router","data loading", "Redux", "Redux Toolkit", "thunks", "Tailwind CSS"],
    image:
      "bg-gradient-to-br from-[var(--palette-navy)] to-[var(--palette-slate)]",
    links: { demo: "#", code: "#" },
  },
  {
    title: "AI Image Generator",
    description:
      "A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and order processing capabilities.",
    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
    image:
      "bg-gradient-to-br from-[var(--palette-navy)] to-[var(--palette-slate)]",
    links: { demo: "#", code: "#" },
  },
  {
    title: "TODO-Task Management App",
    description:
      "Collaborative task management tool with drag-and-drop interface, team collaboration features, and progress tracking.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image:
      "bg-gradient-to-br from-[var(--palette-navy)] to-[var(--palette-slate)]",
    links: { demo: "#", code: "#" },
  },
  {
    title: "Project Five",
    description:
      "A social media dashboard allowing users to track analytics across multiple platforms.",
    tags: ["Vue.js", "Chart.js", "Express"],
    image: "bg-gradient-to-br from-pink-500 to-rose-600",
    links: { demo: "#", code: "#" },
  },
  {
    title: "Project Six",
    description:
      "AI-powered task management tool that organizes your day intelligently.",
    tags: ["Python", "Django", "React"],
    image: "bg-gradient-to-br from-indigo-600 to-violet-600",
    links: { demo: "#", code: "#" },
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-10 min-h-screen flex justify-center items-center px-6 py-20"
    >
      <div className="max-w-7xl w-full bg-white dark:bg-black rounded-2xl ">
        <div className="p-12 md:p-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-7xl md:text-8xl font-extrabold text-sky-900 dark:text-white mb-6">
              <span className="text-sky-700">Featured</span> Projects
            </h2>
            <p className="text-xl font-semibold text-sky-900 dark:text-white max-w-3xl mx-auto">
              Showcasing my best work in web development and design.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-zinc-900 rounded-2xl border-2 border-sky-600 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.image} opacity-80 group-hover:scale-110 transition-transform duration-500`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                    <div className="flex gap-4">
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-sky-900 text-white rounded-full hover:bg-sky-800 transition-all hover:scale-110 shadow-lg"
                      >
                        <i className="fab fa-github text-xl"></i>
                      </a>
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-sky-900 text-white rounded-full hover:bg-sky-800 transition-all hover:scale-110 shadow-lg"
                      >
                        <i className="fas fa-external-link-alt text-xl"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold text-sky-900 dark:text-white mb-3 group-hover:text-sky-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sky-800 dark:text-gray-300 mb-6 flex-grow leading-relaxed text-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-5 py-3 rounded-full bg-sky-900 text-white font-semibold text-sm hover:bg-sky-800 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
