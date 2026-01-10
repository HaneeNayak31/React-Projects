import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        alert("Thank you for reaching out! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => alert(error));
  };

  return (
    <section
      id="contact"
      className="scroll-mt-10 min-h-screen flex justify-center items-center px-6 py-16"
    >
      <div className="max-w-7xl w-full bg-white dark:bg-black rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-extrabold text-sky-900 dark:text-white mb-4">
              Get In <span className="text-sky-700">Touch</span>
            </h2>
            <p className="text-lg font-semibold text-sky-900 dark:text-white max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? Let's talk!
            </p>
          </div>

          {/* Contact Container */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-sky-900 dark:text-white mb-4">
                  Contact Information
                </h3>
                <p className="text-base text-sky-800 dark:text-gray-300">
                  Feel free to reach out to me through any of the channels
                  below. I'll be happy to discuss your project or answer any
                  questions.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-full bg-sky-700 text-white shadow-lg">
                    <i className="fas fa-envelope text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-sky-700 dark:text-sky-300 font-semibold">
                      Email
                    </p>
                    <a
                      href="mailto:haneenyk3106@gmail.com"
                      className="text-base font-bold text-sky-900 dark:text-white hover:text-sky-700 transition-colors"
                    >
                      haneenyk3106@gmail.com
                    </a>
                  </div>
                </div>



                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-full bg-sky-700 text-white shadow-lg">
                    <i className="fas fa-map-marker-alt text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-sky-700 dark:text-sky-300 font-semibold">
                      Location
                    </p>
                    <p className="text-base font-bold text-sky-900 dark:text-white">
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-sky-700 dark:text-sky-300 font-semibold mb-4">
                  Follow Me
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/HaneeNayak31"
                    className="p-4 rounded-full bg-sky-800 text-white hover:bg-sky-600 transition-all transform hover:scale-110 shadow-lg"
                  >
                    <i className="fab fa-github text-2xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hanee-nayak-8ba045280/"
                    className="p-4 rounded-full bg-sky-800 text-white hover:bg-sky-600 transition-all transform hover:scale-110 shadow-lg"
                  >
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                  <a
                    href="https://leetcode.com/u/HaneeNayak31/"
                    className="p-4 rounded-full bg-sky-800 text-white hover:bg-sky-600 transition-all transform hover:scale-110 shadow-lg font-bold text-lg"
                  >
                    <i className="fas fa-code text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border-2 border-sky-700 shadow-lg">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label className="block text-base font-semibold text-sky-900 dark:text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-black border-2 border-sky-700 text-sky-900 dark:text-white placeholder-sky-600 dark:placeholder-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-700 transition-all text-base"
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-sky-900 dark:text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-black border-2 border-sky-700 text-sky-900 dark:text-white placeholder-sky-600 dark:placeholder-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-700 transition-all text-base"
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-sky-900 dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows="5"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-black border-2 border-sky-700 text-sky-900 dark:text-white placeholder-sky-600 dark:placeholder-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-700 transition-all resize-none text-base"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-sky-900 text-white border-2 border-sky-700 rounded-lg font-bold text-base hover:bg-sky-800 transition-all shadow-lg hover:shadow-xl"
                >
                  Send Message <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
