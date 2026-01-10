import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-10 min-h-screen flex justify-center items-center px-6 py-16"
    >
      <div className="max-w-7xl w-full bg-white dark:bg-black rounded-2xl ">
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-extrabold text-sky-900 dark:text-white mb-4">
              <span className="text-sky-700">Featured</span> Projects
            </h2>
            <p className="text-lg font-semibold text-sky-900 dark:text-white max-w-3xl mx-auto">
              Showcasing my best work in web development and design.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-zinc-900 rounded-2xl border-2 border-sky-600 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 flex flex-col h-full"
              >
                {/* Project Image/Video */}
                <div className="relative h-48 overflow-hidden">
                  {project.image.endsWith(".mp4") ? (
                    <video
                      src={project.image}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onMouseOver={(e) => e.target.play()}
                      onMouseOut={(e) => {
                        e.target.pause();
                        e.target.currentTime = 0;
                      }}
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm pointer-events-none">
                    <div className="flex gap-4 pointer-events-auto">
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
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-sky-900 dark:text-white mb-3 group-hover:text-sky-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sky-800 dark:text-gray-300 mb-6 flex-grow leading-relaxed text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full bg-sky-900 text-white font-semibold text-xs hover:bg-sky-800 transition-colors"
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
