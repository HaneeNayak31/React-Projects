const skills = [
  {
    category: "Frontend Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "BootStrap"],
  },
  {
    category: "API & Server-Side (foundations)",
    items: ["Node.js (Basics)", "Express.js", "API Integration", "JWT Basics"],
  },
  {
    category: "Databases (foundations)",
    items: ["MongoDB", "SQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "npm", "VS Code"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-10 min-h-screen flex justify-center items-center px-6 py-20"
    >
      <div className="max-w-7xl w-full bg-white dark:bg-black rounded-2xl overflow-hidden">
        <div className="p-12 md:p-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-7xl md:text-8xl font-extrabold text-sky-900 dark:text-white mb-6">
              My <span className="text-sky-700">Knowledge Area</span>
            </h2>
            <p className="text-2xl font-semibold text-sky-900 dark:text-white max-w-3xl mx-auto">
              Technologies I work with to bring ideas to life.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-blue-900 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-3xl font-bold text-sky-900 dark:text-white mb-6">
                  {skillGroup.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-5 py-2 rounded-full text-lg font-semibold bg-sky-900 text-white hover:bg-sky-700 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
