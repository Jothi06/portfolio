import websiteImg from '../assets/ecommerce-websites.jpg';
import websiteImg1 from '../assets/food-ecommerce.jpg';
import websiteImg2 from '../assets/website-blog.jpg';

export default function Projects() {
  const config = {
    projects: [
      {
        image: websiteImg,
        description:
          'Task Manager Web Application - A responsive web application built using React.js and Tailwind CSS.',
        link: 'https://github.com/jvlcode/jvlcart',
      },
      {
        image: websiteImg1,
        description:
          'E-commerce Website - A modern e-commerce website developed with React.js and Tailwind CSS.',
        link: 'https://github.com/jvlcode/jvlcart',
      },
      {
        image: websiteImg2,
        description:
          'Blogging Platform - A dynamic blogging platform created using React.js and Tailwind CSS.',
        link: 'https://github.com/jvlcode/jvlcart',
      },
    ],
  };

  return (
    <section
      id="projects"
      className="
        flex flex-col py-20 px-5 justify-center text-white
        bg-gradient-to-br from-[#0B1220] via-[#0A4C64] to-[#2EE4D9]/40
        backdrop-blur-xl relative overflow-hidden
      "
    >
      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-teal-300/20 rounded-full blur-3xl bottom-20 right-10 animate-pulse"></div>
      </div>

      <div className="w-full relative">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-teal-300 w-[140px] mb-5 font-bold">
            Projects
          </h1>
          <p className="opacity-90">
            Here are some of my recent projects showcasing my skills in frontend
            development using HTML, JavaScript, React.js and Tailwind CSS.
          </p>
        </div>
      </div>

      <div className="w-full relative z-10">
        <div className="flex flex-col md:flex-row px-10 gap-8">
          {config.projects.map((projects, index) => (
            <div
              key={index}
              className="
                relative shadow-xl rounded-2xl overflow-hidden
                bg-white/10 backdrop-blur-md border border-white/20
                hover:border-teal-300/40 hover:shadow-teal-300/30
                transition-all duration-500
                hover:scale-[1.03]
              "
            >
              <img
                className="h-[200px] w-full object-cover"
                src={projects.image}
              />

              <div className="project-desc p-5 flex flex-col items-center text-center">
                <p className="mb-4">{projects.description}</p>

                <a
                  className="
                    btn px-5 py-2 rounded-lg font-semibold
                    bg-teal-400/20 border border-teal-300/40
                    hover:bg-teal-400/30 hover:shadow-lg
                    transition-all duration-300
                  "
                  target="_blank"
                  href={projects.link}
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
