const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-black rounded-2xl  p-8 md:p-12">
          <div className="flex flex-col items-center gap-8">
            {/* Social Icons */}
            <div className="flex gap-6">
              <a
                href="https://github.com/HaneeNayak31"
                className="p-4 rounded-full bg-sky-900 text-white hover:bg-sky-800 transition-all transform hover:scale-110 shadow-lg"
                title="GitHub"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/hanee-nayak-8ba045280/"
                className="p-4 rounded-full bg-sky-900 text-white hover:bg-sky-800 transition-all transform hover:scale-110 shadow-lg"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="#leetcode"
                className="p-4 rounded-full bg-sky-900 text-white hover:bg-sky-800 transition-all transform hover:scale-110 shadow-lg"
                title="LeetCode"
              >
                <i className="fas fa-code text-2xl"></i>
              </a>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-blue-600"></div>

            {/* Copyright & Text */}
            <div className="text-center">
              <p className="text-xl font-semibold text-sky-900 dark:text-white mb-2">
                Hanee Nayak
              </p>
              <p className="text-sky-700 dark:text-sky-300">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
